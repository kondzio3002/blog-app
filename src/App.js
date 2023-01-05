import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Categories from './components/pages/Categories/Categories';
import PostsCategory from './components/features/PostsCategory.js/PostsCategory';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryId" element={<PostsCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;