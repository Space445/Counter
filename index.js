function Counter() {
    return {
        count: 0,
        increment() {
            this.count++;
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        },
        reset() {
            this.count = 0;
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
});
