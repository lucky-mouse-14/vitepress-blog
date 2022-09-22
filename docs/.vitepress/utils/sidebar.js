import fs from 'fs'
import { resolve } from 'path'

// 文件根目录
const DIR_PATH = resolve(__dirname, '../../')
// 白名单，过滤不是文章的文件和文件夹
const WHITE_LIST = ['index.md', '.vitepress', 'public', 'about']

/** 判断是否是文件夹 */
const isDirectory = (path) => fs.lstatSync(path).isDirectory()
/** 是否包含 */
const intersections = (arr1, arr2) => Array.from(new Set(arr1.filter(item => !new Set(arr2).has(item))))

// 生成列表
// params: 文件夹列表
/**
 * 生成列表
 * params: 文件夹列表
 * path: 路径
 * pathname: 构建地址的路径
 */
const genList = (params, path, pathname) => {
  const res = []
  for (let file in params) {
    const dir = resolve(path, params[file])
    const is = isDirectory(dir)

    if (is) {
      const files = fs.readdirSync(dir)
      res.push({
        text: params[file],
        collapsible: true,
        items: genList(files, dir, `${pathname}/${params[file]}`)
      })
    }

    else {
      const name = params[file].split('.')[0]
      res.push({
        text: name,
        link: `${pathname}/${name}`
      })
    }
  }

  return res
}

function createSideBar(pathname) {
  const dirPath = resolve(DIR_PATH, pathname)
  const files = fs.readdirSync(dirPath)
  const items = intersections(files, WHITE_LIST)
  return genList(items, dirPath, pathname)
}

export {
  createSideBar
}
