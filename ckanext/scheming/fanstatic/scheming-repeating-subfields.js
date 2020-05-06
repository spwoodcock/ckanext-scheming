this.ckan.module('scheming-repeating-subfields', function (jQuery, _) {
    return {
        initialize: function() {
            var container = this,
                $this = $(this.el),
                $template = $this.children('div[name="repeating-template"]'),
                template = $template.html(),
                $add = $this.children('a[name="repeating-add"]'),
                $remove = $this.children('a[name="repeating-remove"]');
            $template.remove();

            $add.on('click', function(e) {
                var $last = $this.find('.scheming-subfield-group').last(),
                    group = $last.data('groupIndex') + 1,
                    $copy = $(
                        template.replace(/{repeating-index}/g, group)
                        .replace(/{repeating-index1}/g, group + 1));
                $copy.insertAfter($last);
                e.preventDefault();
            });

            $remove.on('click', function(e) {
                var $groups = $this.find('.scheming-subfield-group'),
                    $last = $groups.last(),
                    count = $groups.length;
                if(count !== 1) {
                    $last.remove();
                }
                e.preventDefault();
            });
        }
    };
});
