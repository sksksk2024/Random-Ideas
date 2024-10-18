// import '@fortawesome/fontawesome-free/css/all.css';
// if you need to delete the upper line, put the link to font awesome cdn in the head of html
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import './css/style.css';

new Modal();

const ideaForm = new IdeaForm();
ideaForm.render();

new IdeaList();
