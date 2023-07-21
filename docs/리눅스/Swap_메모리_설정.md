---
title: Swap 메모리 설정
last_update:
  date: 2023/07/20
  author: 허브
---

### Swap 메모리

하드디스크 공간의 일부분을 메모리로 사용하는 방법이다.  
하드디스크를 사용하는 만큼 기존 메모리보다 속도가 현저히 떨어진다.

### 설정

보통 Swap 파일의 용량은 기존 메모리의 1.5~2배 정도의 용량을 권장하고 있다.  
fallocate또는 dd 명령어를 이용하여 스왑 파일을 생성할 수 있다.

```bash
# fallocate
sudo fallocate -l 2G /swapfile

# dd
sudo dd if=/dev/zero of=/swapfile bs=1MiB count=2048
```

일반 사용자가 해당 파일에 접근할 수 없도록 권한을 설정한다.

```bash
sudo chmod 600 /swapfile
```

- 파일을 Swap 포맷으로 변경 후 시스템에 등록한다.

```bash
sudo mkswap /swapfile
sudo swapon /swapfile
```

### Swap 메모리 부팅시 자동으로 마운트하도록 적용

인스턴스가 종료되거나 재부팅을 하는 경우 Swap 설정이 초기화된다.  
`/etc/fstab` 파일을 수정하여 Swap 메모리를 영구적으로 적용할 수 있다.  
- 해당 파일은 리눅스 부팅시 마운트정보를 저장하고 있다.

```bash
# vim을 이용하여 해당 파일을 수정한다.
sudo vim /etc/fstab
# 최하단에 다음과 같이 설정하면 된다.
/swapfile swap swap defaults 0 0
```

### Swap 메모리 적용되었는지 확인

리눅스에서는 `free` 명령어를 통해 메모리를 확인할 수 있다.  
-h 옵션을 주면 좀 더 읽기 편한 형태로 출력된다.  

```bash
free -h
              total        used        free      shared  buff/cache   available
Mem:          905Mi       570Mi        65Mi       0.0Ki       270Mi       186Mi
Swap:         2.0Gi       626Mi       1.4Gi
```

아래에 Swap 메모리가 적용되어있는 것을 확인할 수 있다.  
추가로 `swapon` 명령어로도 확인할 수 있다.  

### Swap 메모리 비활성화

`swapoff` 명령어를 사용하여 비활성화 한 후 파일을 삭제하면 된다.

```bash
# swap 설정한 파일 비활성화
sudo swapoff -v /swapfile
# 삭제
sudo rm /swapfile
```

만약 `/etc/fstab`에 값을 설정했을 경우 해당 값을 지워야한다.

## 참고 자료

[How to Add Swap Space on Ubuntu 20.04, Lunuxize](https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-20-04/)