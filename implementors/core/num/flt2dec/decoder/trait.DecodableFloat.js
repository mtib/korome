(function() {var implementors = {};
implementors['libc'] = [];implementors['wayland_sys'] = [];implementors['wayland_kbd'] = [];implementors['glutin'] = [];implementors['enum_primitive'] = [];implementors['glium'] = [];implementors['korome'] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
