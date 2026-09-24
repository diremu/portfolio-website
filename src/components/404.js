import {PALETTES} from './index'

function NotFound() {
  return (
    <div className="app" style={{ "--c3": PALETTES[0][2] }}>
      <div className="wrap notfound">
        <h1><span className="b">404</span></h1>
        <p className="tag">That page doesn't exist.</p>
        <a className="pill hot" href="/">Back to the homepage</a>
      </div>
    </div>
  );
}

export default NotFound