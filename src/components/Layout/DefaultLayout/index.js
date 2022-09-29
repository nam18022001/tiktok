import Header from '../components/Header';
import SideBar from '../components/SideBar';

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
