/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [  
            {  
                protocol: 'https', // The protocol used to access the images  
                hostname: 'cdn.sanity.io', // The domain of the image source  
                port: '', // Optional, default is an empty string  
                pathname: '/**', // Match all paths (wildcard indicates all sub-paths)  
            }]
    }
    
   
};

export default nextConfig;
