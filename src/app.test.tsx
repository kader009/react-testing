import { render, screen } from '@testing-library/react';
import App from './App';


test('this return app text', ()=>{
  render(<App/>)

  const element = screen.getByText('App')

  expect(element).toBeInTheDocument()
})
