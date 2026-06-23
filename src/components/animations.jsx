import { motion } from "framer-motion";

export const Animations = {
    FloatUp({ children, delay = 0, duration = 0.4 }) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: duration,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
    FloatDown({ children, delay = 0, duration = 0.4 }) {
        return (
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: duration,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
    Appear({ children, delay = 0.1, duration = 0.4 }) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: duration,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
}

export default Animations;