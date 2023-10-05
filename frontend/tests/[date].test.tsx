import { render, RenderResult } from '@testing-library/react'
import DayNote from '@/pages/[user]/[date]'

describe('DayNote', () => {
  it('should have defined userId state', () => {
    const { container }: RenderResult = render(<DayNote />);
    const userIdElement: HTMLElement | null = container.querySelector('.userId');
    const userId: string = userIdElement?.textContent || '';

    expect(userId).toBeDefined();
    expect(userId).not.toBe('');
  })
})
