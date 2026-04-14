import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-surface pt-24">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            We couldn't find the page you're looking for. It may have been moved or deleted.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors group"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* Decorative Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-16 text-6xl"
          >
            ❤️
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound
