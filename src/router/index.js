import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import index from "@/components/index";
import login from '@/components/Login'
import loginByOther from '@/components/LoginByOther'
import registerNow from '@/components/registerNow'
import demo from '@/view/demo'
import personal from '@/view/personal'
import housing from '@/view/housing'
import housingAdd from '@/view/housingAdd'
import privateCar from '@/view/privateCar'
import privateCarAdd from '@/view/privateCarAdd'
import family from '@/view/family'   
import familyAdd from '@/view/familyAdd'
import message from '@/view/message'
import ownerInquire from '@/view/ownerInquire'
import visitor from '@/view/visitor'
import visitorAdd from '@/view/visitorAdd'
import facility from '@/view/facility'
import facilityLimits from '@/view/facilityLimits'
import facilityAdd from '@/view/facilityAdd'
import password from '@/view/password'
import passwordAdd from '@/view/passwordAdd'
import member from '@/view/member'
import fingerprint from '@/view/fingerprint'
import doorCard from '@/view/doorCard'
import doorCardAdd from '@/view/doorCardAdd'
import doorOpen from '@/view/doorOpen'
import housingAll from '@/view/housingAll'
import buildingAll from '@/view/buildingAll'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/loginByOther',
			name: 'loginByOther',
			component: loginByOther
		},
		{
			path: '/registerNow',
			name: 'registerNow',
			component: registerNow
		},
		{
			path: '/index',
			name: 'index',
			component: index,
			children: [		
				{
					path:'/index/demo',
					name: 'demo',
					component: demo
				},		
				{
					path: '/index/personal',
					name: 'personal',
					component: personal
				},
				{
					path: '/index/housing',
					name: 'housing',
					component: housing
				},
				{
					path: '/index/housingAdd',
					name: 'housingAdd',
					component: housingAdd
				},
				{
					path: '/index/privatecar',
					name: 'privatecar',
					component: privateCar
				},
				{
					path: '/index/privateCarAdd',
					name: 'privateCarAdd',
					component: privateCarAdd
				},
				{
					path: '/index/family',  
					name: 'family',
					component: family   	
				},
				{
					path: '/index/familyAdd',
					name: 'familyAdd',
					component: familyAdd
				},
				{
					path: '/index/message',
					name: 'message',
					component: message
				},
				{
					path: '/index/ownerInquire',
					name: 'ownerInquire',
					component: ownerInquire
				},
				{
					path: '/index/visitor',
					name: 'visitor',
					component: visitor
				},
				{
					path: '/index/visitorAdd',
					name: 'visitorAdd',
					component: visitorAdd
				},
				{
					path: '/index/facility',
					name: 'facility',
					component: facility
				},
				{
					path: '/index/facilityLimits',
					name: 'facilityLimits',
					component: facilityLimits
				},
				{
					path: '/index/facilityAdd',
					name: 'facilityAdd',
					component: facilityAdd
				},
				{
					path: '/index/password',
					name: 'password',
					component: password
				},
				{
					path: '/index/passwordAdd',
					name: 'passwordAdd',
					component: passwordAdd
				},
				{
					path: '/index/member',
					name: 'member',
					component: member
				},
				{
					path: '/index/fingerprint',
					name: 'fingerprint',
					component: fingerprint
				},
				{
					path: '/index/doorCard',
					name: 'doorCard',
					component: doorCard
				},
				{
					path: '/index/doorCardAdd',
					name: 'doorCardAdd',
					component: doorCardAdd
				},
				{
					path: '/index/doorOpen',
					name: 'doorOpen',
					component: doorOpen
				},
				{
					path: '/index/housingAll',
					name: 'housingAll',
					component: housingAll
				},
				{
					path: '/index/buildingAll',
					name: 'buildingAll',
					component: buildingAll
				},

				
			]
		},
		
		

		
	]
})
