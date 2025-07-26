import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const imageSizes = {
    sm: 32,
    md: 48,
    lg: 64
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <Image
        src="/logo.png"
        alt="PMH Runners Club Logo"
        width={imageSizes[size]}
        height={imageSizes[size]}
        className="rounded-full shadow-lg object-cover"
        priority
      />
    </div>
  );
}