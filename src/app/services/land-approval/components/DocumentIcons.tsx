'use client';

import { Building2, FileCheck, ShieldAlert, FileCode2, Users2, Award, Scale, Trees } from 'lucide-react';

export default function DocumentIcon({ type, className = "w-6 h-6" }: { type: string; className?: string }) {
  switch (type) {
    case 'building':
      return <Building2 className={className} />;
    case 'conversion':
      return <FileCheck className={className} />;
    case 'fire':
      return <ShieldAlert className={className} />;
    case 'blueprint':
      return <FileCode2 className={className} />;
    case 'liaison':
      return <Users2 className={className} />;
    case 'certificate':
      return <Award className={className} />;
    case 'compliance':
      return <Scale className={className} />;
    case 'ecology':
      return <Trees className={className} />;
    default:
      return <Building2 className={className} />;
  }
}
