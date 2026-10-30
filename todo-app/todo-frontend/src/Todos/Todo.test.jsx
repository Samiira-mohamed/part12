import { render, screen, fireEvent } from '@testing-library/react'
import Todo from './Todo'

describe('Todo', () => {
  it('shows the text and the done status of a finished todo', () => {
    const todo = { _id: '1', text: 'Write code', done: true }
    render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

    expect(screen.getByText('Write code')).toBeTruthy()
    expect(screen.getByText('This todo is done')).toBeTruthy()
    expect(screen.queryByText('Set as done')).toBeNull()
  })

  it('shows the not done status and calls completeTodo when clicked', () => {
    const todo = { _id: '2', text: 'Learn containers', done: false }
    const completeTodo = vi.fn()
    render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={completeTodo} />)

    expect(screen.getByText('This todo is not done')).toBeTruthy()
    fireEvent.click(screen.getByText('Set as done'))
    expect(completeTodo).toHaveBeenCalledWith(todo)
  })
})