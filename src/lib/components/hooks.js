import { useCallback, useEffect, useState } from "react";
import { DEVICE_QUERY_MOBILE } from "./config";
import defaultMessages from "./translations/en.json";
import { useIntl } from "react-intl";

export const useMediaQuery = (query) => {
  const getMatches = (query) => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    function handleChange() {
      setMatches(getMatches(query));
    }
    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export const useIsMobile = () => {
  const matches = useMediaQuery(DEVICE_QUERY_MOBILE);
  return matches;
};

const sanitizePath = (scope, id = "") => {
  const parts = `${scope}.${id}`.split(".");
  const cleanParts = parts.filter((part) => part !== "");
  return cleanParts.join(".");
};

export const useMsg = (scope = "", descriptorOnly = false) => {
  const intl = useIntl();

  return useCallback(
    (maybeId, ...rest) => {
      const buildDescriptor = () => {
        const descriptor = {};
        if (typeof maybeId === "string") {
          const path = sanitizePath(scope, maybeId);
          descriptor.id = path;
          descriptor.defaultMessage = defaultMessages[path];
        } else if (typeof maybeId === "object") {
          Object.assign(descriptor, maybeId);
        }
        return descriptor;
      };
      if (descriptorOnly) {
        return [buildDescriptor(), ...rest];
      }
      return intl.formatMessage(buildDescriptor(), ...rest);
    },
    [descriptorOnly, intl, scope]
  );
};

function getTransitionName(transition) {
  const [anim, dir] = transition.split(' ');
  return [`${anim}-in-${dir}`, `${anim}-out-${dir}`];
}

export function useVisibleTransition({
  open = false,
  transition = 'slide bottom',
  containerRef,
  onClose,
  defaultVisible = false,
}) {
  const [visible, setVisible] = useState(defaultVisible);

  const [className, setClassName] = useState('');

  const [transAnimsClassName, setTransAnimsClassName] = useState([]);

  useEffect(() => {
    setTransAnimsClassName(getTransitionName(transition));
  }, [transition]);

  useEffect(() => {
    if (!Array.isArray(transAnimsClassName)) return;

    const setClass = transAnimsClassName[open ? 0 : 1];

    setClassName(setClass);

    if (open) {
      setVisible(true);
    } else if (!defaultVisible) {
      if (!containerRef.current) return;
      const { animationDuration } = getComputedStyle(containerRef.current);
      const delay = parseFloat(animationDuration, 10) * 1000;
      setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, delay);
    }
  }, [containerRef, defaultVisible, onClose, open, transAnimsClassName]);

  return {
    visible,
    setVisible,
    className,
  };
}
