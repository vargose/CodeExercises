const particleAnimator = {};

function render(particles, length) {
    const frame = '.'.repeat(length).split('');
    for (let i = 0; i < particles.length; i += 1) {
        frame[Math.abs(particles[i]) - 1] = 'X';
    }
    return frame.join('');
}

function readInitialState(init) {
    const particles = [];
    for (let i = 0; i < init.length; i += 1) {
        if (init[i] === 'L') {
            particles.push(-(i + 1));
        } else if (init[i] === 'R') {
            particles.push(i + 1);
        }
    }
    return particles;
}

function move(particles, speed, length) {
    const newPositions = [];
    for (let i = 0; i < particles.length; i += 1) {
        const newPosition = (particles[i] < 0)
            ? Math.min(particles[i] + speed, 0)
            : particles[i] + speed;
        if (Math.abs(newPosition) > 0 && newPosition <= length) {
            newPositions.push(newPosition);
        }
    }
    return newPositions;
}

particleAnimator.animate = (speed, init) => {
    let particles = readInitialState(init);
    const frames = [render(particles, init.length)];
    if (speed > 0) {
        while (particles.length > 0) {
            particles = move(particles, speed, init.length);
            frames.push(render(particles, init.length));
        }
    }

    return frames;
};

module.exports = particleAnimator;
