import SvgIcon from 'paraview-glance/src/components/widgets/SvgIcon';

// ----------------------------------------------------------------------------

export default {
  name: 'AboutBox',
  components: {
    SvgIcon,
  },
  data() {
    return {
      version: 'not available',
    };
  },
  created() {
    if (window.VSL_VERSION) {
      if (window.VSL_VERSION === 'main') {
        this.version = 'nightly-master (main)';
      } else {
        this.version = window.VSL_VERSION;
      }
    }
  },
};
