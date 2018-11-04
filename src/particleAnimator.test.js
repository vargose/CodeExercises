const particleAnimator = require('./particleAnimator');

describe('particleAnimator', () => {
    it('returns empty array for empty init', () => {
        expect(particleAnimator.animate(1, '')).toEqual(['']);
    });

    it('replaces L and R with X', () => {
        expect(particleAnimator.animate(0, '.L.R.')).toEqual(['.X.X.']);
    });

    it('moves the particles Right', () => {
        expect(particleAnimator.animate(1, 'R.')).toEqual(['X.', '.X', '..']);
    });

    it('moves the particles Left', () => {
        expect(particleAnimator.animate(1, '.L')).toEqual(['.X', 'X.', '..']);
    });

    it('moves at higher speed', () => {
        expect(particleAnimator.animate(3, 'RR..LRL'))
            .toEqual([
                'XX..XXX',
                '.X.XX..',
                'X.....X',
                '.......']);
    });

    it('can move particles very fast', () => {
        expect(particleAnimator.animate(10, 'RLRLRLRLRL')).toEqual([
            'XXXXXXXXXX',
            '..........']);
    });

    it('moves lots of particles', () => {
        expect(particleAnimator.animate(1, 'LRRL.LR.LRR.R.LRRL.'))
            .toEqual([
                'XXXX.XX.XXX.X.XXXX.',
                '..XXX..X..XX.X..XX.',
                '.X.XX.X.X..XX.XX.XX',
                'X.X.XX...X.XXXXX..X',
                '.X..XXX...X..XX.X..',
                'X..X..XX.X.XX.XX.X.',
                '..X....XX..XX..XX.X',
                '.X.....XXXX..X..XX.',
                'X.....X..XX...X..XX',
                '.....X..X.XX...X..X',
                '....X..X...XX...X..',
                '...X..X.....XX...X.',
                '..X..X.......XX...X',
                '.X..X.........XX...',
                'X..X...........XX..',
                '..X.............XX.',
                '.X...............XX',
                'X.................X',
                '...................']);
    });
});
