import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import AppAlert from '../shared/AppAlert.vue';


describe('Alert component', () => {
  test('renders the correct style for default', () => {
    const wrapper = mount(AppAlert, {});

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['alert--is-default']));
  });

  test('renders the correct style for info', () => {
    const status = 'info';
    const wrapper = mount(AppAlert, {
      props: { status },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['alert--is-info']));
  });

  test('renders the correct style for warning', () => {
    const status = 'warning';
    const wrapper = mount(AppAlert, {
      props: { status },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['alert--is-warning']));
  });

  test('renders the correct style for success', () => {
    const status = 'success';
    const wrapper = mount(AppAlert, {
      props: { status },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['alert--is-success']));
  });

  test('renders the correct style for danger', () => {
    const status = 'danger';
    const wrapper = mount(AppAlert, {
      props: { status },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['alert--is-danger']));
  });

  test('is closable', async () => {
    const wrapper = mount(AppAlert, {
      props: { closable: true },
    });

    expect(wrapper.find('.alert__close').exists()).toBe(true);
  });

  test('is not closable', async () => {
    const wrapper = mount(AppAlert, {
      props: { closable: false },
    });

    expect(wrapper.find('.alert__close').exists()).toBe(false);
  });

  test('no icon if no status', async () => {
    const wrapper = mount(AppAlert, {});

    expect(wrapper.find('.alert__icon').exists()).toBe(false);
  });

  test ('emits event when close button is clicked', async () => {
    const wrapper = mount(AppAlert, {
      data() {
        return {
          clicked: false,
        };
      },
    });
    const closeButton = wrapper.find('.alert__close button');
    await closeButton.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('close');
  } );
});




