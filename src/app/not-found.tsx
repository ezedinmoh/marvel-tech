import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-32">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Error 404 · Destination Missing
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            System Node Not Found
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The requested route does not exist in the Marvel Technologies network mesh or has been relocated.
          </p>
        </div>

        <div className="pt-4 flex justify-center">
          <Button href="/" variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
            Return to Headquarters
          </Button>
        </div>
      </div>
    </div>
  );
}
