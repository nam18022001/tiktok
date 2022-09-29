import Header from './Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>

      <div className="container">
        <nav>
          <SideBar />
        </nav>
        <main>
          <div className="content">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
