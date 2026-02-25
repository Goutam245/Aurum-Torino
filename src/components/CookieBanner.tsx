import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies_accepted")) {
      setTimeout(() => setShow(true), 1500);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-6"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <button onClick={accept} className="btn-gold-solid text-xs px-6 py-2 whitespace-nowrap">Accept</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
