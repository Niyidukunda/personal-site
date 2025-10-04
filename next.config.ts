import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Content Security Policy - Prevents XSS attacks
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requires these for development
              "style-src 'self' 'unsafe-inline'", // Required for Tailwind CSS
              "img-src 'self' data: https:", // Allow images from self, data URLs, and HTTPS
              "font-src 'self' data:",
              "connect-src 'self' https:", // Allow API calls to HTTPS endpoints
              "frame-ancestors 'none'", // Prevent embedding in iframes
              "form-action 'self'", // Only allow forms to submit to same origin
              "base-uri 'self'", // Restrict base URI
              "object-src 'none'", // Block plugins like Flash
            ].join('; ')
          },
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Prevent MIME type confusion attacks
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Control browser features
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'payment=()',
              'usb=()',
              'magnetometer=()',
              'accelerometer=()',
              'gyroscope=()'
            ].join(', ')
          },
          // XSS Protection (legacy but still useful)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  },

  // Image optimization settings
  images: {
    domains: [], // Add external domains if needed
    formats: ['image/webp', 'image/avif'],
  },

  // Additional security settings
  poweredByHeader: false, // Hide X-Powered-By header
  compress: true, // Enable gzip compression
};

export default nextConfig;
