import { useEffect } from 'react';
/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */
function useKeypress(key, action, onKeyDown) {
    useEffect(() => {
        function onKeyup(e) {
            console.log(e)
            if (e.code === key) action()
        }
        window.addEventListener('keyup', onKeyup);
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keyup', onKeyup);
    }, []);
}
export default useKeypress