document.addEventListener('DOMContentLoaded', function() {
    // تحميل حالة الأنشطة من التخزين المحلي
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        const taskId = task.id;
        const taskCompleted = localStorage.getItem(taskId);
        if (taskCompleted === 'true') {
            setTaskState(task, true, false); // تعيين حالة النشاط عند التحميل
        }
    });
});

function toggleTask(taskId, showMessage = true) {
    var task = document.getElementById(taskId);
    var isCompleted = task.classList.contains('completed');

    if (isCompleted) {
        setTaskState(task, false, showMessage);
        localStorage.setItem(taskId, 'false');
    } else {
        setTaskState(task, true, showMessage);
        localStorage.setItem(taskId, 'true');
    }
}

function setTaskState(task, isCompleted, showMessage) {
    var button = task.querySelector('button');
    if (isCompleted) {
        task.classList.add('completed');
        task.style.backgroundColor = '#d4edda';
        button.disabled = true;
        if (showMessage) {
            var message = document.getElementById('motivational-message');
            message.classList.remove('hidden');
            setTimeout(() => {
                message.classList.add('hidden');
            }, 3000);
        }
    } else {
        task.classList.remove('completed');
        task.style.backgroundColor = '';
        button.disabled = false;
    }
}
