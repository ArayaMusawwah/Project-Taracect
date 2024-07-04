'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCalendarAlt } from 'react-icons/fa'

const AddToCalendar = () => {
  return (
    <motion.div
      className="mt-2 inline-flex items-center space-x-2 rounded-md bg-main-accent2 px-4 py-2"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
    >
      <FaCalendarAlt />
      <Link
        title="Add to Calendar"
        data-id="kl22223697"
        href="https://www.addevent.com/event/kl22223697"
        target="_blank"
      >
        Add to Calendar
      </Link>
    </motion.div>
  )
}
export default AddToCalendar
