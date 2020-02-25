import { configure } from '@storybook/react';

import './styles/index.scss';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src', true, /stories\.jsx?$/));
}

configure(loadStories, module);
