
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ReadyView from '../views/ReadyView.vue'
import PresentationView from '../views/PresentationView.vue';
import QuizView from '../views/QuizView.vue'
import ResultsView from '../views/ResultsView.vue'
import SummaryView from '../views/SummaryView.vue'
import AfterSummaryView from '../views/AfterSummaryView.vue'
import StoryTellingView from '../views/StoryTellingView.vue'
import AfterStoriesView from '../views/AfterStoriesView.vue'
import EndView from '../views/EndView.vue'

const router = createRouter({
  history: createWebHistory(),
	routes: [
		{path: '/', name: 'Home', component: HomeView},
		{path: '/slides', name: 'Presentation', component: PresentationView},
		{path: '/ready', name: "Ready", component: ReadyView},
		{path: '/quiz', name: 'Quiz', component: QuizView},
		{path: '/results', name: 'Results', component: ResultsView},
		{path: '/summary', name: 'Summary', component: SummaryView},
		{path: '/after-summary', name: 'AfterSummary', component: AfterSummaryView},
		{path: '/stories', name: 'StoryTelling', component: StoryTellingView},
		{path: '/after-stories', name: 'AfterStories', component: AfterStoriesView},
		{path: '/end', name: 'End', component: EndView},
	]
});

export default router;
