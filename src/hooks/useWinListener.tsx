import { useEffect, useCallback, useMemo, useRef } from "react";

export const useWinListener = (eventName: string, callback: (e: any) => any) => {
  const _eventName = useMemo(() => eventName, [eventName])
  const _cb = useCallback(callback, [callback])

  const prevCb = useRef(_cb) // need mutable value to properly switch out callbacks on change

  useEffect(() => {
    if(prevCb.current !== _cb){
      window && window.removeEventListener(_eventName, prevCb.current, false)
      prevCb.current = _cb
    }
    window && window.addEventListener(_eventName, _cb, false)
    return () => {
      window && window.removeEventListener(_eventName, _cb, false)
    }
  }, [_eventName, _cb])
}