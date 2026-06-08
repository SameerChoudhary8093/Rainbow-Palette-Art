import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 18,
          background: 'linear-gradient(to bottom right, #ec4899, #8b5cf6, #6366f1)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 800,
          borderRadius: '50%',
          fontFamily: 'sans-serif',
        }}
      >
        R
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
