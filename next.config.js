/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        'react-icons': {
          transform: 'react-icons/{{member}}',
        },
        
      },

}

module.exports = nextConfig
