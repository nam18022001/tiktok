import Header from '../components/Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>

      <div className="container">
        <main>
          <div className="content">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
