// 等待页面元素加载完成再执行
document.addEventListener('DOMContentLoaded', () => {

// 背景音乐
    // 背景音乐逻辑
    const musicBtn = document.getElementById("musicBtn");
    const bgMusic = document.getElementById("bgMusic");

    // 标记是否已通过用户交互授权播放
    let userInteracted = false;

    // 首次用户点击页面任意位置时，尝试播放音乐
    document.addEventListener('click', () => {
        if (!userInteracted) {
            userInteracted = true;
            // 尝试播放音乐
            bgMusic.play()
                .then(() => {
                    musicBtn.textContent = "⏸ 暂停音乐";
                    console.log("用户交互后播放成功");
                })
                .catch(err => {
                    console.warn("用户交互后播放仍失败:", err);
                });
        }
    }, { once: true }); // 只监听一次点击

        // 切换播放/暂停
    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = "⏸ 暂停音乐";
        } else {
            bgMusic.pause();
            musicBtn.textContent = "🎵 播放音乐";
        }
    });


});