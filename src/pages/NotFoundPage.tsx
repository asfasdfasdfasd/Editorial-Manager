import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 overflow-hidden font-sans">
            {/* Background Decorative Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />

            <div className="relative z-10 text-center px-6 max-w-md mx-auto space-y-6">
                {/* Animated 404 Text */}
                <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-zinc-50 to-zinc-400 select-none animate-pulse">
                    404
                </h1>

                {/* Subtitle & Info */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
                        Page Not Found
                    </h2>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                        The page you are looking for does not exist or has been moved.
                    </p>
                </div>

                {/* Go to Home Button */}
                <div className="pt-4">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-zinc-950 bg-zinc-50 hover:bg-zinc-200 active:scale-95 transition-all duration-200 rounded-xl shadow-lg shadow-zinc-950/20 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
