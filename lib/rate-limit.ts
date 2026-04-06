type Bucket = {
  count: number;
  resetAt: number;
};

type RateLimitResult = {
  limited: boolean;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
};

type RateLimitOptions = {
  key: string;
  limit: number;
  windowSeconds: number;
};

const storeKey = "__moraspirit360_rate_limit_store__";

const getStore = (): Map<string, Bucket> => {
  const globalObject = globalThis as typeof globalThis & {
    [storeKey]?: Map<string, Bucket>;
  };

  if (!globalObject[storeKey]) {
    globalObject[storeKey] = new Map<string, Bucket>();
  }

  return globalObject[storeKey];
};

const cleanupExpiredEntries = (store: Map<string, Bucket>, now: number): void => {
  for (const [key, bucket] of store.entries()) {
    if (bucket.resetAt <= now) {
      store.delete(key);
    }
  }
};

export const getClientIp = (request: Request): string => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  return "unknown";
};

export const checkRateLimit = ({
  key,
  limit,
  windowSeconds,
}: RateLimitOptions): RateLimitResult => {
  const now = Date.now();
  const windowMs = Math.max(windowSeconds, 1) * 1000;
  const sanitizedLimit = Math.max(limit, 1);
  const store = getStore();

  cleanupExpiredEntries(store, now);

  let bucket = store.get(key);

  if (!bucket || bucket.resetAt <= now) {
    bucket = { count: 0, resetAt: now + windowMs };
    store.set(key, bucket);
  }

  bucket.count += 1;

  const remaining = Math.max(sanitizedLimit - bucket.count, 0);
  const limited = bucket.count > sanitizedLimit;
  const retryAfterSeconds = Math.max(Math.ceil((bucket.resetAt - now) / 1000), 1);

  return {
    limited,
    remaining,
    resetAt: bucket.resetAt,
    retryAfterSeconds,
  };
};
