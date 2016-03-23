import { renderComponent , expect } from '../test_helper';
import TaskItem from '../../src/components/task_item';

describe('TaskItem', () => {
  let component;

  beforeEach(() => {
    // nothing so far
  });

  it('renders the props passed to it', () => {
    const props = {
      task: 'task123',
      type: 'dev',
      code: 'ref123',
      hours: 1.5
    }
    component = renderComponent(TaskItem, props);

    expect(component).to.contain('task123');
    expect(component).to.contain('dev');
    expect(component).to.contain('ref123');
    expect(component).to.contain('1.5');
  });
});
