import { describe, expect } from 'vitest';
import Testimonials from '@/components/homepage/testimonials.tsx';
import { render, screen } from '@testing-library/react';

describe('Testimonials', () => {
    it('Should render the testimonials photo', () => {
        render(<Testimonials />);

        screen.debug();

        const photo = screen.getByTestId('@testimonials/photo');
        expect(photo).toBeInTheDocument();
    });
});