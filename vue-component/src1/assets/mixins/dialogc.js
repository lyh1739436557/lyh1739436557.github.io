export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleOpenDialog (params) {
      if (params) {
        Object.assign(this, params)
      }
      this.dialogVisible = true
    },
    handleCloseDialog () {
      this.dialogVisible = false
    }
  }
}
