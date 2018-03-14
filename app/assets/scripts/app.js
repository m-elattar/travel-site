import RevealOnScroll from './modules/RevealOnScroll';
import stickyheader from './modules/StickyHeader';
import $ from 'jquery';

new RevealOnScroll($('.feature-item'),'85%');
new RevealOnScroll($('.testimonials'),'60%');
var Stickyheader = new stickyheader();