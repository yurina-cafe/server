# Mac、Win、Ubuntu

## Mac

- shift+command+. :打开隐藏文件夹 ’./**’。
- shift+enter:换行。
- vim操作指南：
    - i:进入编辑模式。
    - :q → 退出vim。
    - :q! →不保存直接退出vim。
    - :w →只保存但不退出vim。
    - :wq →保存文件并退出。
    - :v →进入可是模式 按y键复制文本。
    - p →粘贴复制的文本。
- 在 GitHub Actions 中，路径的相对性是基于工作目录的。通常，工作目录是你的仓库的根目录。因此，使用 `./.output` 和 `.output`

## Ubuntu

- 本地上传服务器：scp ’本地文件路径‘  system@ip:port～/dirname。｜ 上传文件夹子需要添加参数 -r。
- nginx相关命令：
    - sudo systemctl start nginx：启动。
    - sudo systemctl stop nginx：停止。
    - sudo systemctl restart nginx：重启。
    - sudo systemctl reload nginx：重新加载配置。
    - sudo systemctl status nginx：检查状态。
    - sudo nginx -t：检查配置语法。
    - sudo tail -f /var/log/nginx/error.log:查看nginx报错。
    - `root` 指令用于指定静态文件的根目录。当Nginx处理请求时，会将请求的URI附加到 `root` 指定的路径上，形成最终的文件路径。
    - `alias` 指令用于将请求的URI路径映射到指定的目录。与 `root` 不同，`alias` 不会将请求的URI附加到指定的路径上，而是直接替换URI路径。
- netstat -nltp :查看端口状态。
- ll 查看权限。
    - linux系统有用户: ubuntu、root、自定义user。
    - 查看进程：
        - ps aux → 查看所有进程。
        - ps -u username → 查看特定用户进程。
        - kil → 关掉进程。