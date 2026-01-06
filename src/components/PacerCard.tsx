import Image from 'next/image';
import { Pacer } from '../types/pacer';

interface PacerCardProps {
  pacer: Pacer;
}

export default function PacerCard({ pacer }: PacerCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Profile Image */}
      <div className="relative h-48 bg-gradient-to-br from-yellow-100 to-blue-100">
        <Image
          src={pacer.profileImage || '/placeholder-runner.png'}
          alt={pacer.name}
          fill
          className="object-cover"
        />
        {/* Captain Badge */}
        {pacer.isCaptain && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            (C)
          </div>
        )}
      </div>

      {/* Pacer Info */}
      <div className="p-3 bg-white">
        <h4 className="font-bold text-sm text-gray-800 text-center truncate">
          {pacer.name}
        </h4>
        {pacer.role && (
          <p className="text-xs text-gray-600 text-center mt-1">
            {pacer.role}
          </p>
        )}
      </div>

      {/* Energy Gel Badge */}
      <div className="absolute bottom-14 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm">
        <span className="text-xs font-bold text-green-600">PR {pacer.PR}</span>
      </div>
    </div>
  );
}