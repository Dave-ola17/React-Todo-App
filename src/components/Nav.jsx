import React from 'react'

export default function Nav() {
  return (
    <div>
        <aside className="contain">
            <h2 className='logo'>React TodoApp</h2>
            <main className='lists'>
                <button className="but1">Beginner</button>
                <button className="but2">Hook</button>
                <button className="but2">State</button>
                <button className="but2">javaScript</button>
                <button className="but2">CSS</button>                
            </main>
            <small>This is a simple Todo App that keeps track of you activities</small>
        </aside>
    </div>
  )
}
