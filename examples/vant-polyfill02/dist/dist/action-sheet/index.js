"use strict";

var _component = require("../common/component");

var _safeArea = require("../mixins/safe-area");

(0, _component.VantComponent)({
    mixins: [(0, _safeArea.safeArea)()],
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect: function onSelect(event) {
            var index = event.currentTarget.dataset.index;
            var item = this.data.actions[index];

            if (item && !item.disabled && !item.loading) {
                this.$emit("select", item);
            }
        },
        onCancel: function onCancel() {
            this.$emit("cancel");
        },
        onClose: function onClose() {
            this.$emit("close");
        }
    }
});
