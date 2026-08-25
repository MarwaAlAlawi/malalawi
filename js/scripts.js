// Clean script.js for your Bootstrap template
document.addEventListener('DOMContentLoaded', () => {
    // 3D Card Stack Control (if used on your page)
    const stackWrapper = document.querySelector('section[style*="--n"]');

    if (stackWrapper) {
        const S = stackWrapper.style;
        const N = +S.getPropertyValue('--n') || 0;
        let k = +S.getPropertyValue('--k') || 0;

        document.addEventListener('click', e => {
            let v = +e.target.dataset.inc;
            if (v && N > 0) {
                S.setProperty('--k', k = (k + v + N) % N);
            }
        });
    }
});