import { listRoute } from '../constants/ListRoute';
import routesType from '../types/routesType';
import { handleScroll } from '../utils/handleScroll';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css';

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white border border-gray-200 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-6 md:gap-8">
          {listRoute.map((el: routesType) => (
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <button
                key={el.path}
                data-tooltip-id="navbar-tooltip"
                data-tooltip-content={el.title}
                onClick={() => handleScroll(el.path.replace('#', ''))}
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer flex items-center justify-center p-0 border-0"
                style={{
                  width: 'auto',
                  height: 'auto',
                  minWidth: 'auto',
                  minHeight: 'auto',
                }}
              >
                <img
                  src={el.icon}
                  alt={el.title}
                  className="navbar-icon"
                  width={26}
                  height={26}
                  style={{
                    width: '26px',
                    height: '26px',
                    minWidth: '26px',
                    minHeight: '26px',
                    maxWidth: '26px',
                    maxHeight: '26px',
                    objectFit: 'contain',
                    display: 'block',
                    flexShrink: 0
                  }}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Tooltip
        id="navbar-tooltip"
        place="top"
        className="!bg-gray-800 !text-white !text-xs !px-2 !py-1 !rounded !z-[60]"
        style={{ zIndex: 60 }}
      />
    </nav>
  );
}
