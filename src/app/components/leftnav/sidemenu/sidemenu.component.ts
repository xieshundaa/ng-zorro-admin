import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input() isCollapse;
  public menus = [
    {
      id: '1',
      name: '系统',
      isOpen: true,
      icon: 'anticon-bars',
      children: [
        {
          name: '仪表盘',
          icon: 'anticon-setting',
          isOpen: true,
          route: 'dashboard',
        },
        {
          name: '自定义路由',
          icon: 'anticon-setting',
          isOpen: true,
          route: 'sys/route',
        },
        { name: '数据字典', icon: 'fa-bus', route: 'role/roletable/page/1', isOpen: false },
        { name: '系统参数', icon: 'fa-send', route: 'permission/permissiontable/page/1' },
        { name: '定时任务', icon: 'fa-send', route: 'permission/permissiontable/page/1' },
        { name: '插件管理', icon: 'fa-send', route: 'permission/permissiontable/page/1' },
        { name: '职工管理', icon: 'fa-send', route: 'permission/permissiontable/page/1' },
        { name: '单位管理', icon: 'fa-send', route: 'permission/permissiontable/page/1' },
        { name: '用户管理', icon: 'fa-send', route: 'permission/permissiontable/page/1' },
        { name: '角色管理', icon: 'fa-send', route: 'permission/permissiontable/page/1' },
        { name: '菜单管理', icon: 'fa-send', route: 'permission/permissiontable/page/1' },
        { name: '日志管理', icon: 'fa-send', route: 'permission/permissiontable/page/1' },
      ]
    },
    {
      id: '2',
      name: '内容管理',
      isOpen: false,
      icon: 'fa-magic',
      children: [
        { name: '文章管理', icon: 'fa-mobile', route: 'post/posttable/page/1' },
        { name: '评论管理', icon: 'fa-minus', route: 'comment/commenttable/page/1' }
      ]
    },
    {
      id: '3',
      name: '系统监控',
      isOpen: false,
      icon: 'fa-wrench',
      children: [
        { name: '系统状态', icon: 'fa-line-chart', route: 'sys/sysmonitor' },
        { name: '高德地图', icon: 'fa-map-marker', route: 'map/map' }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
