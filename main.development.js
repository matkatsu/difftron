import { app, BrowserWindow, Menu, shell } from 'electron';
import LANGUAGES from './App/Config/Language';
import THEMES from './App/Config/Theme';
import DIFF_FORMAT from './App/Config/DiffFormat';

let mainWindow = null;

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer'); // eslint-disable-line global-require

    const extensions = [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS',
    ];
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    for (const name of extensions) {
      try {
        await installer.default(installer[name], forceDownload);
      } catch (e) {} // eslint-disable-line
    }
  }
};

// 初期化
app.on('ready', async () => {
  await installExtensions();

  mainWindow = new BrowserWindow({
    show: false,
    width: 1023,
    height: 600,
  });

  mainWindow.loadURL(`file://${__dirname}/App/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
    // aceエディタ height100%指定時のレイアウト崩れ対策
    mainWindow.setSize(1024, 600);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // 言語サブメニュー
  const makeLanguageSubMenu = (lang) => {
    const menu = {
      label: lang,
      click() {
        mainWindow.webContents.send('set-language', lang);
      },
    };
    return menu;
  };
  const languageMenu = [];
  for (const lang of LANGUAGES) {
    languageMenu.push(makeLanguageSubMenu(lang));
  }

  // テーマサブメニュー
  const makeThemeSubMenu = (theme) => {
    const menu = {
      label: theme,
      click() {
        mainWindow.webContents.send('set-theme', theme);
      },
    };
    return menu;
  };
  const themeMenu = [];
  for (const theme of THEMES) {
    themeMenu.push(makeThemeSubMenu(theme));
  }

  // menu
  const template = [
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'CmdOrCtrl+Z',
          role: 'undo',
        },
        {
          label: 'Redo',
          accelerator: 'Shift+CmdOrCtrl+Z',
          role: 'redo',
        },
        {
          type: 'separator',
        },
        {
          label: 'Cut',
          accelerator: 'CmdOrCtrl+X',
          role: 'cut',
        },
        {
          label: 'Copy',
          accelerator: 'CmdOrCtrl+C',
          role: 'copy',
        },
        {
          label: 'Paste',
          accelerator: 'CmdOrCtrl+V',
          role: 'paste',
        },
        {
          label: 'Select All',
          accelerator: 'CmdOrCtrl+A',
          role: 'selectall',
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Language',
          submenu: languageMenu,
        },
        {
          label: 'Theme',
          submenu: themeMenu,
        },
        {
          label: 'DiffFormat',
          submenu: [
            {
              label: 'unified',
              click() {
                mainWindow.webContents.send('set-diff-format', DIFF_FORMAT.unified);
              },
            },
            {
              label: 'html',
              click() {
                mainWindow.webContents.send('set-diff-format', DIFF_FORMAT.html);
              },
            },
          ],
        },
      ],
    },
    {
      role: 'window',
      submenu: [
        {
          role: 'minimize',
        },
        {
          role: 'close',
        },
      ],
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click() { shell.openExternal('https://github.com/romiogaku/difftron'); },
        },
      ],
    },
  ];

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {
          role: 'about',
        },
        {
          type: 'separator',
        },
        {
          role: 'hide',
        },
        {
          role: 'hideothers',
        },
        {
          role: 'unhide',
        },
        {
          type: 'separator',
        },
        {
          role: 'quit',
        },
      ],
    });
  }

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});
