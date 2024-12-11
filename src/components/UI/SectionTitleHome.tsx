import { motion } from 'framer-motion';

const SectionTitleHome = (props: { main?: string; gold?: string }) => {
  return (
    <h2 className="section-title ">
      <motion.span
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="main"
      >
        {props.main}{' '}
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="gold"
      >
        {props.gold}
      </motion.span>
    </h2>
  );
};

export default SectionTitleHome;
